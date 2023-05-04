# standbridge-front-challenge

## Build Setup
### Change your env file and point to 
BASE_URL=http://127.0.0.1:8000 <-> you can change this

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
## Libraries Included
1. Bootstrap Vue
2. Axios
3. vue-server-renderer for better performance and hydration in browser

# Challenge Description
As requested a courses route was added  to call the only course at the moment seeded by the laravel api db and assigned to an specific instructor so how I did it? <br />
On the [courses route](): /courses I included all the baseComponents needed so check the code and review my implementation, this is the final result: <br />

## -- Filters --
- Refresh All data: <br />
I included a base button instance to refresh the whole table to have Present and Absent students, this will set just the url to basic, check method >courses>refreshTable() <br />

- Toggle between Present|Absent 
I included a base checkbox to toggle the whole table to have just Present or Absent students, this will set just the url params to present=true|false, check method >courses>changePresentAbsentApiCall(), we are using events from the base checkbox component like so <br />
```js
child
  <b-form-checkbox v-model="checked" :class="inputClass" :name="checkName" switch v-on="$listeners" >
```

so we can call it like for example <br />

```js
parent
<BaseCheckBox
  v-model="showPresentAbsent"
  class="align-self-center"
  :checked-prop="showPresentAbsent === 0 ? false : true"
  :check-name="'present-absent'" @change="changePresentAbsentApiCall"
>
  {{  showPresentAbsent ? 'Present' : 'Absent' }}
</BaseCheckBox>
``` 

- Table Paginated
for now we are paginating all courses so if you have multiple courses we could have those in here so we're calling the courses with instructors and students, then just showing the students in the table, the table is not that modular because that implementation would required a lot of cases, for practical and challenge proposes i leave it as it is for now. <br />
check component: [component]()
<br />
Implementation: <br />
```
<BaseTable
  :end-point-url="endpointUrl"
  data-position="0"
  data-route="[0].students"
  head-variant="light"
  :outlined="true"
  :hover="true"
  :no-border-collapse="true"
  :current-page="currentPage"
  :per-page="perPage"
  :extra-params="extraParams"
  :show-empty="true"
  caption-top
/>
```

--- Base components plugin allowed globally --- <br />
Check this [file]() as it was implemented to include all base components and avoid injection in all places where you want to use it
As well check [nuxt-config]() <br />
Why i used nuxt? For practical proposes I used Nuxt to gain time on for example adding a new route everything is faster.
--- Check all base components code --- <br />
- BaseInput []()<br />
- BaseSelect []()<br />
- BaseButton []()<br />
- BaseCheckBox []()<br />
- BaseTable []()<br />


## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
