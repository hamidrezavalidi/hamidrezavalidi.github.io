# hamidrezavalidi.github.io

Personal academic website of Hamidreza Validi, built with Jekyll and served by GitHub Pages.
There is no theme to install and no build step to run: GitHub builds the site every time you push.

## Publish it (one time)

1. On GitHub, create a new **public** repository named exactly `hamidrezavalidi.github.io`.
   Do not add a README, license, or .gitignore there.
2. Push the contents of this folder (the files themselves, not the folder) to it:

   ```bash
   cd my_website
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/hamidrezavalidi/hamidrezavalidi.github.io.git
   git push -u origin main
   ```

   Alternatively, on the new repository page click **uploading an existing file** and drag
   everything in this folder into the browser window.
3. In the repository, open **Settings > Pages**. Under **Build and deployment**, set
   Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**, then **Save**.
4. After a minute or two the site is live at https://hamidrezavalidi.github.io.

## Edit the content

Almost everything lives in plain YAML files under `_data/`. Edit a file on GitHub (pencil icon)
or locally, commit, and the site updates itself.

| What | File |
| --- | --- |
| Name, title, links, CV link | `_config.yml` |
| Journal articles | `_data/publications.yml` |
| Other publications and dissertation | `_data/other_work.yml` |
| Students and mentees | `_data/students.yml` |
| Courses | `_data/teaching.yml` |
| About text | `index.html` |
| Research intro and themes | `research.html` |
| Teaching intro | `teaching.html` |
| Colors and fonts | `assets/css/main.css` (variables at the top) |

### Add a paper

Copy an existing entry in `_data/publications.yml` to the top of the file and edit it:

```yaml
- title: My new paper
  authors: ["*A. Student", "H. Validi", "A. Coauthor"]   # * marks a mentee
  venue: INFORMS Journal on Computing
  venue_short: IJOC
  details: "38(1): 1–20"        # optional
  status: To appear            # optional
  year: 2027
  award: Winner, ...            # optional
  selected: true                # optional, shows it on the home page
  links:
    - {label: paper, url: "https://..."}
    - {label: code, url: "https://github.com/..."}
```

Numbering (J1, J2, ...) and year grouping are automatic.

### Update your CV

The CV link points to `files/cv.pdf`. Replace that file with the new version (keep the name) and push.

### Replace the photo

Overwrite `assets/img/profile.jpg`. A portrait (2:3) at least 450 px wide looks sharp on high-resolution screens.

## Preview locally (optional)

```bash
gem install bundler jekyll
jekyll serve
```

Then open http://localhost:4000.

