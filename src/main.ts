import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import{FormsModule} from '@angular/forms';
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
