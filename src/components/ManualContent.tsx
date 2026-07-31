import manualHtml from '../content/manualContent.html?raw';

export function ManualContent() {
  return <div className="content-inner" dangerouslySetInnerHTML={{ __html: manualHtml }} />;
}
