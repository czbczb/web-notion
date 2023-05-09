#!/usr/local/bin/python3
import sys
import logging
import os
import math
import moviepy.editor as mp

logging.debug(f"argvLen: {len(sys.argv)}")
if len(sys.argv) < 3:
    print(f"Usage: {sys.argv[0]} TEXT_CONTENT OUTPUT_PATH")
    sys.exit(1)

textContent = sys.argv[1]
outputPath = sys.argv[2]

logging.basicConfig(level=logging.DEBUG)
print(f"textContent: {textContent}")
print(f"outputPath: {outputPath}")

if not os.path.exists(os.path.dirname(outputPath)):
    os.makedirs(os.path.dirname(outputPath))

clip = mp.TextClip(textContent, fontsize=50, color='white', font='Arial')
fps = 30  # 设置视频帧率为 30 帧每秒
duration = math.ceil(clip.duration * fps) / fps  # 计算持续时间并向上取整
clip.write_videofile(outputPath, fps=fps, duration=duration)
clip.write_videofile(outputPath)

logging.info(f"Video saved to {outputPath}")

# test run 
# python3 textToVideo.py "Hello, world" ./output.mp4