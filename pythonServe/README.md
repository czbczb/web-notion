# 安装依赖
```bash
pip install -r requirements.txt
```

# 运行命令
```bash
python3 your_script.py
```

# 传递参数执行
```bash
python your_script.py --input-file input.docx --output-file output.docx
```
# 解析命令行参数
```bash 
python
import argparse

parser = argparse.ArgumentParser(description='Convert docx to HTML, translate to English, and convert back to docx.')
parser.add_argument('--input-file', type=str, required=True, help='Path to the input docx file')
parser.add_argument('--output-file', type=str, required=True, help='Path to the output docx file')
args = parser.parse_args()

# 使用 args.input_file 和 args.output_file 作为输入和输出文件路径
docx_file = args.input_file
html = docx_to_html(docx_file)
translated_html = translate_html(html)
html_to_docx(translated_html, args.output_file)
```