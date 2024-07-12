## Description

<!-- Please include a summary of the changes and the related issue. -->
- Added .eslintrc.js file to configure the linter using ESLint and Prettier.
- Added .env file with PORT=3000 to follow best practice.
- Added linter plugins and configs to "devDependencies" in package.json.
- Reset the Dockerfile to the original configuration such that it runs on PORT=3000.
- Docstrings have been added to several files for organizational purposes.

## Related Issue

<!-- Link to the Jira issue(s) this pull request addresses. -->
<!-- Example: -->
<!-- JIRA: [KAN-1](https://oregonstate-team-a4gvoaif.atlassian.net/jira/software/projects/KAN/boards/1?selectedIssue=KAN-1) -->
Will request that one be opened.

## Motivation and Context

<!-- Why is this change required? What problem does it solve? -->
These changes help to establish the frontend workflow and environment by allowing any developer to check their code 
against the ESlint / Prettier standard on their own machine.

## How Has This Been Tested?

<!-- Describe the tests that you ran to verify your changes. -->
<!-- Provide instructions so we can reproduce. -->
These changes have been tested locally on my system using VS Code.
Steps to Reproduce (MacOS):
- `brew install node`
- `npm install eslint@8.57.0  -g --save-dev`
- `npm install eslint-config-prettier --save-dev`
- `npm install jest --save-dev`

**Testing:**
- Run application on localhost:3000 `npm start`
- Run Linter: `npm run lint`
- Run Linter with autocorrection: `npm run lint -- --fix`

**Docker:**

Successfully built a local Docker Image at christianmckinnon/jhaiapp1.0

## Types of changes

<!-- What types of changes does your code introduce? Put an `x` in all the boxes that apply: -->

- [ ] Bug fix (non-breaking change which fixes an issue)
- [x] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)

## Checklist:

<!-- Go over all the following points, and put an `x` in all the boxes that apply. -->
<!-- If you're unsure about any of these, don't hesitate to ask. We're here to help! -->

- [x] My code follows the code style of this project.
- [x] I have commented my code, particularly in hard-to-understand areas.
- [x] My changes generate no new warnings.
- [x] I have added tests to cover my changes.
- [x] I have passed lints.
- [x] All new and existing tests passed.

## Further comments

<!-- If this is a relatively large or complex change, kick off the discussion by explaining why you chose the solution you did and what alternatives you considered, etc. -->
None.