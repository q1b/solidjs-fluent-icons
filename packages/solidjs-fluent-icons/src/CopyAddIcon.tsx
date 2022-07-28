
import { splitProps, ComponentProps, JSX } from "solid-js";

function CopyAddIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8 2a2 2 0 00-2 2v10c0 1.1.9 2 2 2h1.2c-.08-.32-.15-.66-.18-1H8a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1v5.02c.34.03.68.1 1 .19V4a2 2 0 00-2-2H8zm-.5 15h2.1c.18.36.4.7.66 1H7.5A3.5 3.5 0 014 14.5V6a2 2 0 011-1.73V14.5A2.5 2.5 0 007.5 17zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z"/>
</svg>

  );
}
export default CopyAddIcon;