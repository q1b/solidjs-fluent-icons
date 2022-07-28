
import { splitProps, ComponentProps, JSX } from "solid-js";

function WifiLockIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.83 7.38c.41.41.8.88 1.13 1.37a.5.5 0 01-.82.57 8.61 8.61 0 00-14.2 0 .5.5 0 01-.82-.58 9.61 9.61 0 0114.71-1.36zM14.6 9.36c.47.47.88 1.04 1.19 1.65a.5.5 0 01-.9.46 5.45 5.45 0 00-7.18-2.49c-.24-.27-.54-.5-.87-.67a6.45 6.45 0 017.76 1.05zm-6.1 1.7a2 2 0 011.03.65 3.03 3.03 0 013.29 1.8.5.5 0 10.92-.4 4.03 4.03 0 00-5.24-2.13v.08zm1.5 2.35V16a1.3 1.3 0 100-2.6zM3.5 11v1H3a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4a1 1 0 00-1-1h-.5v-1a2 2 0 10-4 0zm1 1v-1a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
</svg>

  );
}
export default WifiLockIcon;