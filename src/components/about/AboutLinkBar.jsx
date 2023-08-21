import LinkBar from "../LinkBar";

export default function AboutLinkBar() {
  const links = [
    {
      id: 1,
      text: '外観',
      to: '',
    },
    {
      id: 2,
      text: '内装',
      to: 'interior',
    },
    {
      id: 3,
      text: '店舗情報',
      to: 'shop',
    }
  ]

  return <LinkBar links={links} />
}