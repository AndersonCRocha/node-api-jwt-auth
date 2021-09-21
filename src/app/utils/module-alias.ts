import path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../../../');

moduleAlias.addAliases({
  '@models': path.join(files, 'src', 'app', 'models'),
  '@controllers': path.join(files, 'src', 'app', 'controllers'),
});
