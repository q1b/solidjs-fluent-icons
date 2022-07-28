
import { splitProps, ComponentProps, JSX } from "solid-js";

function HandOpenHeartIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.5 3l-.63-.49a2.4 2.4 0 00-3.24 3.5l3.5 3.83c.2.22.54.22.74 0l3.5-3.83a2.4 2.4 0 00-3.24-3.5l-.63.5zm1.38 10.09l-.82-2.2c.2-.07.39-.2.55-.37l.25-.28.94 2.49A3 3 0 0116 16l-1.22 1.1c-.61.54-1.4.83-2.22.82a4 4 0 01-1.5-.3 18.4 18.4 0 00-6.85-1.24 1.21 1.21 0 01-1.08-.6 1 1 0 010-1 4.2 4.2 0 012.75-1.7L2.42 9.63a1.56 1.56 0 01.47-2.53 1.56 1.56 0 011.66-2.54 1.55 1.55 0 012.58-.63c.08-.18.19-.34.32-.48a1.58 1.58 0 011.78-.3c-.12.33-.2.67-.22 1.02L9 4.16a.6.6 0 00-.84.84l.7.65 1.32 1.36 1.25 1.36a.48.48 0 01-.13.48.48.48 0 01-.7 0L8.1 6.36l-.7-.7-1-1.06a.58.58 0 00-.8 0 .57.57 0 000 .8l2.75 2.75a.5.5 0 01-.7.7L5.79 7l-1.4-1.4a.56.56 0 00-.95.4c0 .15.05.3.16.4l1.07 1.06 2.18 2.19a.5.5 0 01-.7.7L5 9.21 3.96 8.17a.56.56 0 00-.79 0 .52.52 0 00-.17.39.56.56 0 00.17.44l4.19 4.15A.5.5 0 017 14s-2.15 0-2.99 1.35c0 .04.08.11.2.11h.14c2.43 0 4.83.44 7.1 1.31a2.51 2.51 0 002.66-.33l1.25-1.15a2 2 0 00.52-2.2zm-6.16.86c.4-.2 1.04-.32 1.7-.2.64.1 1.26.42 1.66 1.03a.5.5 0 00.84-.56 3.42 3.42 0 00-2.34-1.46c-.84-.14-1.7 0-2.3.3a.5.5 0 00.44.89z"/>
</svg>

  );
}
export default HandOpenHeartIcon;