import { createContentLoader } from 'vitepress'

export default createContentLoader('about/batalhas/20*.md',{
	transform(raw) {
		return raw.sort((a,b) =>  a.frontmatter.year > b.frontmatter.year ? -1 : 1)
	}})