

export const wordFontSizeToPx = {
    '初号': '42px',   // 通常不使用，仅作示例
    '小初': '36px',
    '一号': '28px',
    '小一': '24px',
    '二号': '22px',
    '小二': '18px',
    '三号': '16px',
    '小三': '15px',   // 根据第一张图，小三与16px接近
    '四号': '14px',
    '小四': '12px',
    '五号': '10.5px',
    '小五': '9px',
    '六号': '7.5px',
    '小六': '6.5px',
    '七号': '5.5px',
    '八号': '5px',
    // 以下是额外的字号大小，可能在Word中不常用，但提供了像素大小的映射
    '9': '9px',
    '10': '10px',
    '10.5': '10.5px',
    '11': '11px',
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '18': '18px',
    '20': '20px',
    '22': '22px',
    '26': '26px',
    '28': '28px',
    '36': '36px',
    '48': '48px',
    '56': '56px',
    '72': '72px'
};


export const templates = {
    seasonReport: {
        chinese: {
            pageHeaderAndFooter: {
                fontSize: '11',
                fontFamily: 'MSungHK-Light',
                fontStyle: 'italic',
                text: '页眉和页脚'
            },
            logo: {
                src: 'path_to_chinese_logo_image', // Logo图片路径
                text: '公司标志'
            },
            companyName: {
                fontSize: '17.5',
                fontFamily: 'WXPVYF,MHeiHK-Bold',
                fontWeight: 'bold',
                text: '公司中文名称'
            },
            stockCode: {
                fontSize: '13.1',
                fontFamily: 'TimesLTStd-Bold',
                fontWeight: 'bold',
                text: '股票代码'
            },
            reportTitle: {
                fontSize: '小三',
                fontFamily: 'WXPVYF,MHeiHK-Bold',
                fontWeight: 'bold',
                text: '报告标题'
            },
            financialSummary: {
                text: '财务摘要',
                subheading: {
                    fontSize: '四号',
                    fontFamily: 'WXPVYF,MHeiHK-Bold',
                    fontWeight: 'bold',
                    text: '财务摘要小标题'
                },
                notes: {
                    fontSize: '11.0',
                    fontFamily: 'MSungHK-Light',
                    text: '附注'
                }
            },
            mainText: {
                fontSize: '13.0',
                fontFamily: 'MSungHK-Light',
                textAlign: 'justify',
                lineSpacing: '1.02',
                text: '正文'
            },
            titleLevels: {
                text: '标题',
                level1: {
                    fontSize: '四号',
                    fontFamily: 'WXPVYF,MHeiHK-Bold',
                    fontWeight: 'bold',
                    text: '一级标题'
                },
                level2: {
                    fontSize: '13.0',
                    fontFamily: 'WXPVYF,MHeiHK-Bold',
                    fontWeight: 'bold',
                    text: '二级标题'
                },
                level3: {
                    fontSize: '13.0',
                    fontFamily: 'WXPVYF,MHeiHK-Bold',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    text: '三级标题'
                },
                level4: {
                    fontSize: '13.0',
                    fontFamily: 'MSungHK-Light',
                    fontStyle: 'italic',
                    text: '四级标题'
                },
                level5: {
                    fontSize: '13.0',
                    fontFamily: 'MSungHK-Light',
                    text: '五级标题'
                }
            },
            financialStatements: {
                text: '财务申明',
                title: {
                    fontSize: '四号',
                    fontFamily: 'WXPVYF,MHeiHK-Bold',
                    fontWeight: 'bold',
                    text: '财务报表标题'
                },
                'expressed-in': {
                    fontSize: '13.0',
                    fontFamily: 'MSungHK-Light',
                    fontStyle: 'italic',
                    text: '以美元列示'
                },
                table: {
                    fontSize: '13.0',
                    fontFamily: 'WXPVYF,MHeiHK-Bold,MSungHK-Light',
                    fontWeight: 'bold',
                    text: '财务数据表格'
                }
            },
            signature: {
                position: 'right',
                fontSize: '13.0',
                fontFamily: 'MSungHK-Light',
                fontStyle: 'italic',
                text: '签名'
            },
            directorList: {
                fontSize: '11.0',
                fontFamily: 'MSungHK-Light',
                fontStyle: 'italic',
                text: '董事名单'
            },
            pageNumber: {
                fontSize: '五号',
                fontFamily: 'TimesLTStd-Roman',
                textAlign: 'center',
                text: '页码'
            }
        },  
        english: {
            pageHeaderAndFooter: {
                fontSize: '11',
                fontFamily: 'TimesLTStd-Italic',
                fontStyle: 'italic',
                text: '页眉和页脚'
            },
            logo: {
                src: 'path_to_english_logo_image', // Logo图片路径
                text: '公司标志'
            },
            companyName: {
                fontSize: '19.6',
                fontFamily: 'TimesLTStd-Bold',
                fontWeight: 'bold',
                text: '公司英文名称'
            },
            stockCode: {
                fontSize: '13.1',
                fontFamily: 'TimesLTStd-Bold',
                fontWeight: 'bold',
                text: '股票代码'
            },
            reportTitle: {
                fontSize: '小三',
                fontFamily: 'TimesLTStd-Bold',
                fontWeight: 'bold',
                text: '报告标题'
            },
            financialSummary: {
                text: '财务摘要',
                subheading: {
                    fontSize: '四号',
                    fontFamily: 'TimesLTStd-Bold',
                    fontWeight: 'bold',
                    text: '财务摘要小标题'
                },
                notes: {
                    fontSize: '11.0',
                    fontFamily: 'TimesLTStd-Roman',
                    text: '附注'
                },
            },
            mainText: {
                fontSize: '13.0',
                fontFamily: 'TimesLTStd-Roman',
                textAlign: 'justify',
                lineSpacing: '1.1',
                text: '正文'
            },
            titleLevels: {
                text: '标题',
                level1: {
                    fontSize: '四号',
                    fontFamily: 'TimesLTStd-Bold',
                    fontWeight: 'bold',
                    text: '一级标题'
                },
                level2: {
                    fontSize: '13.0',
                    fontFamily: 'TimesLTStd-Bold',
                    fontWeight: 'bold',
                    text: '二级标题'
                },
                level3: {
                    fontSize: '13.0',
                    fontFamily: 'TimesLTStd-Bold',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    text: '三级标题'
                },
                // 根据您提供的文件内容，小三号对应16px，但模板中使用了13.0，这里我保持与模板中的一致
                level4: {
                    fontSize: '13.0',
                    fontFamily: 'TimesLTStd-Italic',
                    fontStyle: 'italic',
                    text: '四级标题'
                },
                level5: {
                    fontSize: '13.0',
                    fontFamily: 'TimesLTStd-Roman',
                    text: '五级标题'
                }
            },
            financialStatements: {
                text: '财务申明',
                title: {
                    fontSize: '四号',
                    fontFamily: 'TimesLTStd-Bold',
                    fontWeight: 'bold',
                    text: '财务报表标题'
                },
                'expressed-in': {
                    fontSize: '13.0',
                    fontFamily: 'TimesLTStd-Italic',
                    fontStyle: 'italic',
                    text: '以美元列示'
                },
                table: {
                    fontSize: '13.0',
                    fontFamily: 'TimesLTStd-Bold,TimesLTStd-Roman',
                    fontWeight: 'bold',
                    text: '财务数据表格'
                }
            },
            signature: {
                position: 'right',
                fontSize: '13.0',
                fontFamily: 'TimesLTStd-Italic',
                fontStyle: 'italic',
                text: '签名'
            },
            directorList: {
                fontSize: '11.0',
                fontFamily: 'TimesLTStd-Italic',
                fontStyle: 'italic',
                text: '董事名单'
            },
            pageNumber: {
                fontSize: '五号',
                fontFamily: 'TimesLTStd-Roman',
                textAlign: 'center',
                text: '页码'
            }
        }
    },
    normalReport: {
        chinese: {

        },
        english: {

        }
    }
};

