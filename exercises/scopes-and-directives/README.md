# `your-modal`

> We're going to build a modal widget. This is an example of readme driven development. We'll look at this readme and use the features of Angular scopes to develop a comprehensive directive example.

`your-modal` allows you to create a modal with dynamic content and title, show/hide behaviour, and click to dismiss.

## Example

Provide the content for the modal within the `your-modal` tags:

```html
<your-modal
    title="Welcome, {{ user.name }}"
    options="{ dismissable: true }"
    accepted-model="user.acceptedTerms"
    dismissed="sayThankYou()"
    shown='userForm.$valid && userForm.$submitted'>
  <p>{{ user.name }}, we need you to accept some terms before we continue.</p>
  <p ng-repeat="paragraph in terms.paragraphs">
    {{ :: paragrah }}
  </p>
</your-modal>
```

## Options

### `title=`

Set the title attribute as an interpolated string:

```
<your-modal title="Welcome, {{ user.name }}">
```

### `options=`

Set options for the modal via an object:

```
<your-modal options="{ dismissable: true }">
<your-modal options="modalOptions">
```

### `accept-model=`

Set place to bind the user's acceptance of terms

```
<your-modal options="user.acceptedTerms">
```

### `dismissed=`

An expression to run when the user has dismissed the modal

```
<your-modal dimissed="sayThankYou()">
```

### `shown=`

A property to bind to. While the property evaluates truthy, the modal will be shown.

```
<your-modal shown='userForm.$valid && userForm.$submitted'>
```


