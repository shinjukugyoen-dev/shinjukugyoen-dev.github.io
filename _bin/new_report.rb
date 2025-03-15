#!/usr/bin/env ruby

require 'time'

abort '日付と拡張子を指定してください
Usage: new_report.rb 2025/1/1 wasm' if ARGV.size != 2

date = Time.parse ARGV[0]
ext = ARGV[1]

file = "reports/#{date.strftime '%Y-%m-%d'}_#{ext}-#{date.strftime '%Y-%m-%d'}.md"
event = "新宿御苑.#{ext} \##{date.strftime '%Y'}.#{(date.strftime '%m').to_i}.#{(date.strftime '%d').to_i}"

template = <<END
---
title: "#{event} を開催しました"
layout: layouts/main.vto
author: ""
tags:
  - report
---

\# #{event}
END

abort "#{file} はすでに存在しています" if File.exist? file
`echo '#{template}' > #{file}`
