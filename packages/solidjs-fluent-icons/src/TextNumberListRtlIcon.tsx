
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextNumberListRtlIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 1.5a.5.5 0 00-.38-.49.5.5 0 00-.57.27l-.07.12a2.96 2.96 0 01-1.2 1.15.5.5 0 00.44.9c.3-.15.56-.34.78-.53V5.5a.5.5 0 101 0v-4zm-2.35 6.15a.5.5 0 00.7.7l.05-.04.2-.12c.17-.1.41-.19.71-.19.23 0 .41.06.53.15.1.07.16.17.16.35a.5.5 0 01-.21.44c-.15.12-.35.22-.62.35l-.14.08c-.32.15-.7.36-1 .7-.33.35-.53.81-.53 1.43 0 .28.22.5.5.5h2.5a.5.5 0 000-1h-1.91c.04-.1.1-.2.17-.27a2.38 2.38 0 01.83-.53c.27-.13.59-.29.84-.5.33-.27.57-.65.57-1.2 0-.5-.22-.9-.57-1.15a1.92 1.92 0 00-1.1-.35h-.01a2.5 2.5 0 00-1.66.63v.01h-.01zm1.1 7.85c0-.28.22-.5.5-.5.34 0 .53-.1.63-.18.1-.09.13-.2.13-.3-.01-.2-.19-.52-.76-.52-.41 0-.63.1-.72.17a.41.41 0 00-.1.07l.02-.02v.01l-.01.01v.01a.5.5 0 01-.89-.47v-.01h.01v-.02a.8.8 0 01.11-.15c.07-.08.17-.17.3-.27.28-.18.7-.33 1.28-.33 1.03 0 1.73.67 1.76 1.48.01.37-.12.74-.4 1.02.28.28.41.65.4 1.02-.03.8-.73 1.48-1.76 1.48-.59 0-1-.15-1.28-.33a1.4 1.4 0 01-.4-.42l-.01-.01v-.01a.5.5 0 01.88-.48c.01.02.04.05.09.08.1.07.3.17.72.17.57 0 .75-.33.76-.52 0-.1-.04-.21-.13-.3-.1-.08-.29-.18-.63-.18a.5.5 0 01-.5-.5zM3.5 4a.5.5 0 000 1h8a.5.5 0 000-1h-8zm0 5a.5.5 0 000 1h8a.5.5 0 000-1h-8zm0 5a.5.5 0 100 1h8a.5.5 0 000-1h-8z"/>
</svg>

  );
}
export default TextNumberListRtlIcon;