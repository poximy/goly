# Url Shortener (Front-End)

This project is built using svelte & typescript

Want to see it live, go to: `https://url-svelte.netlify.app`
![Project view](/images/project_view.png)
## Quickstart

---

Well assume you already have python and node installed

### Front-end:

start by cloning: `https://github.com/erickzv/url-shortener-frontend-svelte.git`

then once it's cloned lets go inside the folder and run `npm install`

finnaly run `npm run start`

### Back-end:

first clone the back-end: `https://github.com/erickzv/url-shortener-backend.git`

then run `python -m venv venv` this will create an enviorment after that run `source venv/bin/activate` to activate the enviorment`

once its cloned go inside the folder and run `pip install -r dependencies/common.txt`

## Project structure

---

Files related to application are in the `src`, `public` directories.

Application parts are:

```
src
|--api         - backend apis
|--components  - component stuff
|  |--auth     - security/auth
|  |--data     - displaying metadata
|  |--nav      - navbar
|  |--url      - shortener stuff
|--App.svelte  - main component
|--global.d.ts - global types
|--main.ts     - where everything starts!
```
