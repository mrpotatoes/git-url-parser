# Git URL Parser
I've found myself doing this a bit so I figured I'd make a simple package to handle this and allow for your own custom providers to be added as well. It's easy to use. Fully tested.

Use Rollup please. Otherwise this is terrible.

There is a dist because
1. I like using ES6 and I don't want to be forced not to
2. `async`/`await` is excellent. `promises` are just the worst.
3. Is there a reason not to have a single bundle to consume if the package is very small?
4. Smaller. 
