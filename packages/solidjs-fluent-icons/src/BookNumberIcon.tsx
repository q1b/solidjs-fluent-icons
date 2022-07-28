
import { splitProps, ComponentProps, JSX } from "solid-js";

function BookNumberIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 7.5c0-.27.22-.5.5-.5h1.29l.22-1.1a.5.5 0 01.98.2l-.18.9h.98l.22-1.1a.5.5 0 01.98.2l-.18.9h.94a.5.5 0 010 1h-1.14l-.2 1h1.1a.5.5 0 110 1h-1.3L11 11.1a.5.5 0 01-.98-.2l.18-.9h-.98l-.22 1.1a.5.5 0 11-.98-.2l.18-.9h-.94a.5.5 0 010-1H8.4l.2-1H7.5a.5.5 0 01-.5-.5zM10.4 9l.2-1H9.6l-.2 1h.98zM6 2h8a2 2 0 012 2v11.5a.5.5 0 01-.5.5H5a1 1 0 001 1h9.5a.5.5 0 010 1H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2zM5 15h10V4a1 1 0 00-1-1H6a1 1 0 00-1 1v11z"/>
</svg>

  );
}
export default BookNumberIcon;