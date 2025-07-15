import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import {
  createEnvironmentInjector,
  EnvironmentInjector,
  runInInjectionContext,
  inject
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './app/services/auth.service';

async function main() {
  // First bootstrap just to get root injector
  const app = await bootstrapApplication(AppComponent, appConfig);
  const parentInjector = app.injector;

  // Now create custom injector to run pre-app logic
  const baseInjector = createEnvironmentInjector(
    [provideHttpClient()],
    parentInjector
  );

  // Use injection context to refresh token before app fully initializes
  // await runInInjectionContext(baseInjector, async () => {
  //   const authService = inject(AuthService);
  //   try {
  //     const res = await authService.refreshAccessToken().toPromise();
  //     if (res?.token) {
  //       authService.setToken(res.token);
  //       console.log('✅ Token refreshed before full app start');
  //     }
  //   } catch (err) {
  //     console.warn('⚠️ Refresh token invalid or user not logged in');
  //   }
  // });

  await runInInjectionContext(baseInjector, async () => {
  const authService = inject(AuthService);
  const success = await authService.initializeToken();
  if (success) {
    console.log('✅ Token refreshed before full app start');
  } else {
    console.warn('⚠️ Refresh token invalid or user not logged in');
  }
});

}

main().catch((err) => console.error(err));
