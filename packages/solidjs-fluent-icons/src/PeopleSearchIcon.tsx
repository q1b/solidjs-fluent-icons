
import { splitProps, ComponentProps, JSX } from "solid-js";

function PeopleSearchIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm7.87 10.8a8.53 8.53 0 01-3.97 1.17 1.5 1.5 0 00-.34-.53l-.44-.44a8.07 8.07 0 004.2-1.05A3.36 3.36 0 0016 13a1 1 0 00-1-1H8.74c-.12-.36-.3-.7-.5-1H15a2 2 0 012 2c0 1.7-.83 2.97-2.13 3.8zM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 10.7-.7L7.3 15.6A3.5 3.5 0 104.5 17zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
</svg>

  );
}
export default PeopleSearchIcon;