require 'json'
require 'net/http'
require 'pry-byebug'
JSON_PATH = 'https://raw.githubusercontent.com/shawnps/kanjidic2-json/master/kanjidic2.json'
DIR_NAME = 'public/kanji/meta'
FileUtils.mkdir_p(DIR_NAME) unless FileTest.exist?(DIR_NAME)


data = Net::HTTP.get_response(URI.parse(JSON_PATH)).body
json = JSON.parse(data)

def make_code(char)
  return "0#{char.ord.to_s(16)}"
end

json.map do |part|
  begin
    open("#{DIR_NAME}/#{make_code(part["literal"])}.json", "w+") do |file|
      readings = part["readings"]
      on = readings ? readings.find{|h| h["r_type"] == "ja_on"} : nil
      kun = readings ? readings.find{|h| h["r_type"] == "ja_kun"} : nil
      meanings = part["meanings"]
      part_data = {
        literal: part["literal"],
        meanings: meanings ? meanings.select{|a| !a["m_lang"]}.map{|a| a["meaning"]} : nil,
        stroke_count: part["stroke_count"],
        on_yomi: on ? on["reading"] : nil,
        kun_yomi: kun ? kun["reading"]: nil
      }.to_json
      file.puts part_data
    end
  rescue => e 
    binding.pry
    puts "err raised: #{part}"
  end
end

