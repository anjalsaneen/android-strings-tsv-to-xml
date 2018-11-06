var fs  = require("fs");

fs.readFileSync('./strings.tsv').toString().split('\n').forEach(function (line, index) { 
    const tabs = line.split('\t');
    if (!fs.existsSync('output') && index == 0) {
      fs.mkdirSync('output');
    }

    save(tabs[0], tabs[1], index, 'output/values', false);
    save(tabs[0], tabs[2], index, 'output/values-hi', true);
    save(tabs[0], tabs[3], index, 'output/values-afh', true);
    save(tabs[0], tabs[4], index, 'output/values-pa', true);
    save(tabs[0], tabs[5], index, 'output/values-ml', true);
});

function save(id, content, index, dir, isEnd) {
  if(isEnd) {
    content =  content.substring(0, content.length - 1);
  }
  if (!fs.existsSync(dir) && index == 0) {
      fs.mkdirSync(dir);
  }
  if (index == 0 && fs.existsSync(`${dir}/strings.xml`)) {
    fs.unlinkSync(`${dir}/strings.xml`);
  }
  fs.appendFileSync(`${dir}/strings.xml`, `<string name="${id}">${content}</string>\n`);
}