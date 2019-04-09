## Examples

### Basic

```jsx
<TextInput id="full-name" label="Name" />
```

If you aren't using react, you'll need to use the following html:

```html
<div class="form-field">
    <label
        for="full-name"
        class="form-field_label--text">Name</label>
    <input
        id="full-name"
        class="form-field_input--text"
        label="Name"
        type="text">
</div>
```