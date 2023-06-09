For Sourcemaps Release Bundle Repro.  For most consistent results, you probably want to test in my org and not edit the dsn or the sentry.properties.

[project javascript-nextjs](https://francisorg.sentry.io/issues/?project=4504089864830976&referrer=sidebar)

1. npm install

2. npm run build

3. npm run start (localhost:3000)

4. You can throw error with button labeled "Crash", If you click on "this page!", you can throw errors with the "Throw error" and "UNDEFINED BUTTON" buttons

5.  Current release is set to "aldenRelease" inside of the client, server, and next configs.  This release value never works anymore, so should not map.

6. Change the releases to something else and do a npm run build + npm run start, it should work next time you throw the error.

7. Change back to "aldenRelease" and it should break.

8. Change back to the new release, change some files and npm run build + npm run start 10 or so times and this release probably will break too.  Sometimes won't break for a day or more.  Once broken, it will be broken forever until you change the value again.