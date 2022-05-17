const createPage = (name, title, chunk = '', template = undefined) => {
  return {
    entry: `src/pages/${name}/main.js`,
    template: template || 'public/index.html',
    filename: name === 'index' ? `${name}.html` : `${name}/index.html`,
    title,
    chunks: ['chunk-vendors', 'chunk-common', chunk || name]
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'git' ? process.env.BASE_URL : '/',
  pages: {
    index: createPage('index', 'main'),
    'some_module': createPage('some', '추가', 'some_module'),
    'todo': createPage('todo', '할일', 'todo', 'public/todo.html')
  }
}
