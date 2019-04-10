## Examples

### Basic

```jsx
<TextInput
    id="full-name"
    label="Full Name"
    placeholder="Enter your full name, example John Doe" />
```

If you aren't using react, you'll need to use the following html:

```html
<div class="form-field">
    <label
        for="full-name"
        class="form-field_label--text">Full Name</label>
    <input
        id="full-name"
        class="form-field_input--text"
        label="Name"
        placeholder="Enter your full name, example John Doe"
        type="text">
</div>
```