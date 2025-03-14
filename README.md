# Repro for app-builder + lightningcss bug

Without lightning css:

```
npm ci
LIGHTNING_CSS=0 npm run build && cat dist/public/build/css/*.css
# .app-module__container--TzeEP{width:100%;width:stretch;width:-webkit-fill-available;width:-moz-available}
```

With lightning css:

```
npm ci
LIGHTNING_CSS=1 npm run build && cat dist/public/build/css/*.css
# .app-module__container--TzeEP{width:-moz-available}
```
