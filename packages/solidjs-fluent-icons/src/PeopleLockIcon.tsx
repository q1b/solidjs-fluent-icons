
import { splitProps, ComponentProps, JSX } from "solid-js";

function PeopleLockIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.75 3.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM3.5 5.75a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zm7.5 8.72C10.23 15.3 8.93 16 6.75 16c-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 01-.68-1.99V12c0-1.1.9-2 2-2H10a2 2 0 012 2V12.08a1.43 1.43 0 01-.01.18v.02A2 2 0 0011 14v.47zm-8.5-2.4v.1l.06.32c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15s3.26-.8 3.74-1.5a2.95 2.95 0 00.5-1.42l.01-.02V12a1 1 0 00-1-1H3.5a1 1 0 00-1 1v.06zM14.5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm1.5 5.5v1H13a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4a1 1 0 00-1-1h-.5v-1a2 2 0 10-4 0zm1 1v-1a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
</svg>

  );
}
export default PeopleLockIcon;