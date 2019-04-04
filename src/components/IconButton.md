## Usage

- Buttons promote primary functions or services.
- Buttons are always used in groups.
- Buttons are generated dynamically via SPAs or added directly to a page via static HTML.
- Buttons should be laid out in an even grid without orphans when possible.

## Functionality and Behavior
- Buttons should always stretch horizontally to fill the available space in the content area.
- By default, buttons are 3 per row (referred to as “3-up”). However, this should be overridden via a configuration option so that a designer can determine the best use for a given space. E.g., home page buttons are 5-up.
- At their default height, buttons should support 1 or 2 rows of label text.
- Button height can increase dynamically to accommodate more content. All buttons in the group should stretch accordingly.

## Breakpoints

Regardless of how many items display per row at desktop size, the following breakpoints must be respected at small sizes:

- Min width for 5-up: 1200px
- Min width for 3-up: 768px
- Min width for 2-up: 576px
- At XS (<576px), all buttons should stack in a single column.

## Examples

### Basic

**React**

```jsx
<IconButton
	link="http://www.pawpatrol.com/"
	icon="fa-paw"
	text="Meet the Paw Patrol"
/>
```

**Html**

```html
<a href="http://www.pawpatrol.com/" class="dg_icon-button">
	<i class="far fa-paw"></i> Meet the Paw Patrol
</a>
```
