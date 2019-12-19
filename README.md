# Git URL Parser
I've found myself doing this a bit so I figured I'd make a simple package to handle this and allow for your own custom providers to be added as well. It's easy to use. Fully tested.

Use Rollup please. Otherwise this is terrible.

There is a distribution because
1. I like using ES6 and I don't want to be forced not to
2. `async`/`await` is excellent. `promises` are just the worst.
3. Is there a reason not to have a single bundle to consume if the package is very small?
4. Smaller. 

# Git Urls
Give it a URL and you can retrieve:
* The project it belongs to
* The lines
* The user/group
* The provider
* The common page
* It's `raw` equivalent

Provide a `provider`, `project`/`group`, `path` and you can build git URLs for raw and web for `branches` or `commits`.

## Urls it handles
Regular & Raw
* File by commit
* File by branch

Common pages
* Commits
* Branches
* Packages
* Releases
* Pull Requests
* Issues
* CI/CD & Custom

Providers
* Github & Gists
* Bitbucket & Snippets
* Gitlab & Snippets

# Writing a plugin

# TODOs
- [x] Add test tooling
- [ ] Add testing
- [ ] Add linting
- [ ] Push to NPM as a valid module.
