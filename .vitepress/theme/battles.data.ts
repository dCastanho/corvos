import { createContentLoader } from 'vitepress'

export default createContentLoader('about/batalhas/20*.md',{
	transform(raw) {
		return raw.sort((a,b) =>  a.frontmatter.title > b.frontmatter.title ? -1 : 1)
	}})