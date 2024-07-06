from docx import Document
from docx.opc.constants import CONTENT_TYPE as CT
from bs4 import BeautifulSoup
from googletrans import Translator

def docx_to_html(docx_file):
    """将 docx 文件转换为 HTML"""
    document = Document(docx_file)
    html = ""
    for element in document.element.body:
        if CT.XML_DOCUMENT in element.xml:
            html += str(element)
    return html

def translate_html(html):
    """将 HTML 中的中文翻译为英文"""
    soup = BeautifulSoup(html, 'html.parser')
    translator = Translator()
    for tag in soup.find_all():
        if tag.string:
            translation = translator.translate(tag.string, src='zh-CN', dest='en')
            tag.string.replace_with(translation.text)
    return str(soup)

def html_to_docx(html, docx_file):
    """将 HTML 转换为 docx 文件"""
    document = Document()
    document.body.html = html
    document.save(docx_file)

# 使用示例
docx_file = 'test.docx'
html = docx_to_html(docx_file)
translated_html = translate_html(html)
output_docx_file = 'output.docx'
html_to_docx(translated_html, output_docx_file)
