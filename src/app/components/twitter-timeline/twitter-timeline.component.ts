import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.scss']
})
export class TwitterTimelineComponent {
  @Input() acountName: string

  constructor() {}

  get url() {
    return `https://twitter.com/${this.acountName}?ref_src=twsrc%5Etfw`
  }
}
