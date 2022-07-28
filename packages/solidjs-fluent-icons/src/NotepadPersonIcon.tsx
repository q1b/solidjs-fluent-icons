
import { splitProps, ComponentProps, JSX } from "solid-js";

function NotepadPersonIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 7a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 6a.5.5 0 000 1h2a.5.5 0 000-1h-2zm-1-11a.5.5 0 00-.5.5V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h5.87a3.18 3.18 0 01-.33-1H5.5a.5.5 0 01-.5-.5v-12c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v4.54a3.02 3.02 0 011 0V4.5c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 00-1 0V3h-2.5v-.5a.5.5 0 00-1 0V3H7v-.5a.5.5 0 00-.5-.5zm9 12a2 2 0 100-4 2 2 0 000 4zm0 5c2.5 0 3.5-1.25 3.5-2.5 0-.83-.67-1.5-1.5-1.5h-4c-.83 0-1.5.67-1.5 1.5 0 1.25 1 2.5 3.5 2.5zm-8-9a.5.5 0 000 1H11a.5.5 0 000-1H7.5z"/>
</svg>

  );
}
export default NotepadPersonIcon;