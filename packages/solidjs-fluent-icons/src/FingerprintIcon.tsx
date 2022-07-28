
import { splitProps, ComponentProps, JSX } from "solid-js";

function FingerprintIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.72 3.95c1.53-.74 4.81-1.44 8.5.97a.5.5 0 10.55-.84c-4.03-2.63-7.7-1.9-9.49-1.03a.5.5 0 10.44.9zm-1.81.64a.5.5 0 01-.14.7 5.33 5.33 0 00-1.34 1.46.5.5 0 11-.86-.5c.27-.46.95-1.34 1.65-1.8a.5.5 0 01.69.14zm5.59-.05a.5.5 0 100 1c1.66 0 5.51 1.38 6.5 6.55a.5.5 0 101-.18c-1.1-5.72-5.43-7.37-7.5-7.37zM9.34 10.8c-.87.7-1.52 2.69.56 6.46a.5.5 0 11-.87.48c-2.15-3.88-1.78-6.52-.32-7.71A2.68 2.68 0 0113 11.35c.08.26.14.58.2.9l.04.15c.08.38.17.78.3 1.18.26.79.67 1.57 1.48 2.16a.5.5 0 01-.6.8 5.17 5.17 0 01-1.83-2.65c-.15-.46-.25-.9-.33-1.29l-.03-.16a9 9 0 00-.19-.8 1.68 1.68 0 00-2.7-.84zm6.16 1.17a.5.5 0 10-1 .06c.1 1.8 1.22 2.74 1.85 2.95a.5.5 0 00.3-.96c-.22-.07-1.07-.64-1.15-2.05zm-4.5.53a.5.5 0 10-1 0c0 1.05.13 1.85.44 2.64.3.77.77 1.5 1.4 2.4a.5.5 0 10.82-.58 10.63 10.63 0 01-1.3-2.19A5.94 5.94 0 0111 12.5zM7.97 8.79c-1.72 1.33-2.7 4.14-1.02 7.49a.5.5 0 01-.9.44C4.18 13 5.22 9.65 7.35 8a4.82 4.82 0 013.73-1 5.47 5.47 0 013.65 2.56.5.5 0 11-.84.55 4.48 4.48 0 00-2.97-2.12 3.82 3.82 0 00-2.95.8zm.49-3a.5.5 0 10-.35-.94c-4.68 1.7-5.79 6.19-5.35 9.22a.5.5 0 10.99-.14c-.4-2.74.62-6.65 4.7-8.14z"/>
</svg>

  );
}
export default FingerprintIcon;