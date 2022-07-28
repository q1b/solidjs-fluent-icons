
import { splitProps, ComponentProps, JSX } from "solid-js";

function DrinkBottleOffIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.28 6.99L2.15 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-2.16-2.15a2.5 2.5 0 01-3.74 1.97 2.49 2.49 0 01-2.5 0A2.5 2.5 0 015 15.5v-5l.01-.22a4.11 4.11 0 011.27-3.29zM13.3 14l-6-6h-.57A3.2 3.2 0 006 10.34L6 10.5V14h7.3zM6 15v.5a1.5 1.5 0 002.44 1.17.5.5 0 01.62 0 1.5 1.5 0 001.88 0 .5.5 0 01.62 0A1.5 1.5 0 0014 15.5V15H6zm8-4.5v1.38l1 1V10.5l-.01-.22a4.07 4.07 0 00-.67-2.56c-.4-.6-.86-1.04-1.24-1.42l-.01-.01c-.55-.54-.9-.9-1.02-1.4A1.5 1.5 0 0011.5 2h-3a1.5 1.5 0 00-.54 2.9c-.06.23-.16.43-.3.64l.71.71c.28-.35.5-.75.59-1.25h2.09c.16.86.74 1.43 1.27 1.96l.05.04H9.12l1 1h3.17a5.2 5.2 0 01.19.27 3.15 3.15 0 01.51 2.07l.01.16zM8.5 4a.5.5 0 010-1h3a.5.5 0 010 1h-3z"/>
</svg>

  );
}
export default DrinkBottleOffIcon;