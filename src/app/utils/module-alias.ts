import path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../../../');

moduleAlias.addAliases({
  '@': path.join(files, 'src'),
  '@models': path.join(files, 'src', 'app', 'models'),
  '@controllers': path.join(files, 'src', 'app', 'controllers'),
});
