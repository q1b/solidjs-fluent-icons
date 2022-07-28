
import { splitProps, ComponentProps, JSX } from "solid-js";

function DrinkBottleIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.5 2h3a1.5 1.5 0 01.55 2.9c.12.48.47.85 1.02 1.39l.01.01c.38.38.84.83 1.24 1.42l.02.05a4.14 4.14 0 01.65 2.51l.01.22v5a2.5 2.5 0 01-3.75 2.17 2.49 2.49 0 01-2.5 0A2.5 2.5 0 015 15.5v-5l.01-.22L5 10a4.3 4.3 0 011.63-3.33l.33-.34c.53-.55.88-.92 1-1.43A1.5 1.5 0 018.5 2zM14 14v-3.5-.16a3.09 3.09 0 00-.53-2.1 5.2 5.2 0 00-.18-.24H6.72A3.2 3.2 0 006 10.34L6 10.5V14h8zm-8 1v.5a1.5 1.5 0 002.44 1.17.5.5 0 01.62 0 1.5 1.5 0 001.88 0 .5.5 0 01.62 0A1.5 1.5 0 0014 15.5V15H6zm5.05-10h-2.1c-.15.87-.7 1.45-1.23 1.99L7.7 7h4.67l-.05-.04c-.53-.53-1.1-1.1-1.27-1.96zM8.5 4h3a.5.5 0 000-1h-3a.5.5 0 000 1z"/>
</svg>

  );
}
export default DrinkBottleIcon;