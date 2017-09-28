import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from '../../service/hero';
import { Hero } from '../../entity/hero';

@Component({
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.scss'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        /**
         * 在传出最终字符串之前，debounceTime(300)将会等待，直到新增字符串的事件暂停了 300 毫秒。 我们实际发起请求的间隔永远不会小于 300ms。
         * distinctUntilChanged确保只在过滤条件变化时才发送请求， 这样就不会重复请求同一个搜索词了。
         * switchMap()会为每个从debounce和distinctUntilChanged中通过的搜索词调用搜索服务。 它会取消并丢弃以前的搜索可观察对象，只保留最近的。
         */
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.heroSearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}