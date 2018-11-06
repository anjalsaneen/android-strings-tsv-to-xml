var fs  = require("fs");

fs.readFileSync('./strings.tsv').toString().split('\n').forEach(function (line, index) { 
    const tabs = line.split('\t');
    save(tabs[0], tabs[1], index, 'values-hi', false);
    save(tabs[0], tabs[2], index, 'values-afh', true);
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