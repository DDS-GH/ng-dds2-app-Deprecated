import { Component, Input, AfterViewInit } from "@angular/core";
import { DdsComponent } from "../../helpers/dds-component-shell";
import { stringToBoolean } from "../../helpers/dds-helpers";

@Component({
  selector: "dds-tag",
  templateUrl: "./tag.component.html"
})
export class TagComponent extends DdsComponent implements AfterViewInit {
  @Input() aria: string = `Dismiss`;
  @Input() dismiss: any = `true`;
  @Input() icon: string = ``;
  @Input() classList: string = ``;

  ngOnInit() {
    super.ngOnInit();
    this.ddsInitializer = `Tag`;
    this.dismiss = stringToBoolean(this.dismiss);
    this.ddsOptions = {
      srDismiss: this.aria,
      dismiss: this.dismiss
    };
  }
}
