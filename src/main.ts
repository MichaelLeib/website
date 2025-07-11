import { provideHttpClient } from "@angular/common/http";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [provideAnimationsAsync(), provideRouter([]), provideHttpClient()],
}).catch((err) => console.error(err));
