# Contributing to Veds AI

First off, thank you for considering contributing to Veds AI! It's people like you that make Veds AI such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, make sure to check our [Issues](https://github.com/VedrajSingh1926/VedsAI/issues) to see if someone else has already created a ticket. If not, go ahead and make one!

## Fork & create a branch

If this is something you think you can fix, then fork Veds AI and create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```
git checkout -b 325-add-glassmorphic-navbar
```

## Get the test suite running

Make sure your local environment has `node` and `npm` installed.

```
npm install
npm run dev
```

## Implement your fix or feature

At this point, you're ready to make your changes. Feel free to ask for help; everyone is a beginner at first :smile_cat:

## Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with Veds AI's master branch:

```
git remote add upstream git@github.com:VedrajSingh1926/VedsAI.git
git checkout main
git pull upstream main
```

Then update your feature branch from your local copy of main, and push it!

```
git checkout 325-add-glassmorphic-navbar
git rebase main
git push --set-upstream origin 325-add-glassmorphic-navbar
```

Finally, go to GitHub and make a Pull Request! We'll review it and help you get it merged.
