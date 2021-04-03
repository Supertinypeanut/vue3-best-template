# vue3-best-template

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
## 目录结构
```

src
├── App.vue
├── assets
│   ├── icon
│   │   ├── DownOutlined.svg
│   │   └── index.ts
│   ├── images
│   │   └── logo.png
│   └── styles
│       ├── index.less
│       ├── mixin.less
│       ├── transition.less
│       └── variables.less
├── components
│   ├── common
│   └── layout
│       ├── 404.vue
│       ├── HelloWorld-setup.vue
│       └── HelloWorld.vue
├── hooks
│   ├── index.ts
│   ├── useEventBus.ts
│   ├── useProjectService.ts
│   └── useStore.ts
├── main.ts
├── router
│   └── index.ts
├── services
│   ├── example
│   │   └── services.auto.ts
│   └── index.ts
├── store
│   ├── example
│   │   ├── actions.ts
│   │   ├── getters.ts
│   │   ├── index.ts
│   │   └── mutations.ts
│   └── index.ts
├── types
│   ├── modules.d.ts
│   ├── shims-vue.d.ts
│   ├── typing.services.d.ts
│   └── typing.store.d.ts
├── utils
│   ├── axios.ts
│   ├── index.ts
│   └── watcher.ts
└── views
    ├── Home
    │   └── index.vue
    └── SetupLayout
        └── index.vue

```

