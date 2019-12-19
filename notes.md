# Testing Your Backend

## What should I be testing?

Low hanging fruit. 

  - the happy path. In a perfect world, how should the system work? 
  - the edge cases. Invalid data, network problems.

Writing test is also a system's design exercise.

EVERYTHING IS A FUNCTION OR A VALUE.

A function takes in (optional args) and { return a value }

A component takes in (optional props) and { return UI }

An endpoint takes in (optional data(body/url param/query sting/header)) and { return response/JSON data (string) }

## User Story

As a role
I want ...
So that ... the value the user gets out of the system

## Scenario

```
GIVEN a valid username
  and valid password
  and
WHEN the user clicks login

THEN the user shold not be logged in
  and the system responds with status code 401
  and
```
