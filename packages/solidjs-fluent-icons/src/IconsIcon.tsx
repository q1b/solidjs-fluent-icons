
import { splitProps, ComponentProps, JSX } from "solid-js";

function IconsIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 3a3 3 0 00-2.17 5.07c.1.11.17.25.17.4 0 .3-.24.53-.53.53H3.42a.42.42 0 00-.42.42A4.58 4.58 0 007.58 14H8.7c.05.09.12.17.18.25a8.6 8.6 0 00-.61.75h-.7A5.58 5.58 0 012 9.42C2 8.64 2.64 8 3.42 8h3.12a4 4 0 117.34-3h1.95c.65 0 1.17.52 1.17 1.17 0 1-.82 1.83-1.83 1.83h-1.7a4 4 0 01-.26.38c.37.2.68.48.93.8a9.84 9.84 0 00-1.34.12c-.2-.13-.42-.22-.67-.26-.2-.04-.38-.21-.38-.43 0-.13.07-.25.17-.33a3 3 0 00.9-1.28h2.35c.46 0 .83-.37.83-.83 0-.1-.07-.17-.17-.17H13a3 3 0 00-3-3zm5.66 8.15A7.11 7.11 0 0013.3 11c-1.57.2-2.38 1.27-2.85 2.43a.5.5 0 11-.92-.37c.53-1.33 1.57-2.8 3.65-3.06 1-.12 1.92.02 2.67.18l.66.14.34.08c.3.07.5.1.64.1a.5.5 0 01.45.72l-.22.38-.02.02-.32.54a7.5 7.5 0 00-.77 1.86c-.16.56-.37 1.31-.74 1.94a2.94 2.94 0 01-2.63 1.54 3.1 3.1 0 01-2.3-1.08 4.42 4.42 0 01-.56-.76c-.6.61-1.06 1.3-1.44 2.06a.5.5 0 11-.9-.44c1.06-2.13 2.67-3.71 5.8-4.75a.5.5 0 11.3.94 10.2 10.2 0 00-2.99 1.51l.02.04a2.93 2.93 0 00.5.73c.37.4.89.75 1.57.75.47 0 .82-.12 1.1-.3.27-.17.49-.43.67-.74.3-.51.46-1.09.62-1.64l.13-.47a8.5 8.5 0 01.91-1.96l-.03-.01-.38-.09-.61-.14z"/>
</svg>

  );
}
export default IconsIcon;