
import { splitProps, ComponentProps, JSX } from "solid-js";

function DualScreenMirrorIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zM3 6a1 1 0 011-1h5.5v10H4a1 1 0 01-1-1V6zm7.5 9V5H16a1 1 0 011 1v8a1 1 0 01-1 1h-5.5zM6.25 8c.18 0 .34.1.43.25l1.75 3A.5.5 0 018 12H4.5a.5.5 0 01-.43-.75l1.75-3A.5.5 0 016.25 8zm.88 3l-.88-1.5-.88 1.5h1.76zm7.05-2.75l1.75 3a.5.5 0 01-.43.75H12a.5.5 0 01-.43-.75l1.75-3a.5.5 0 01.86 0zm.45 2.75l-.88-1.5-.88 1.5h1.76z"/>
</svg>

  );
}
export default DualScreenMirrorIcon;