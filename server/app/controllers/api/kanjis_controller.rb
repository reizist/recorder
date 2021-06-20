class Api::KanjisController < ApplicationController
  def meta
    codes = params["codes"].split(',')
    results = []
    codes.each do |code|
      begin
        data = JSON.parse(File.read(Rails.root.join('public', 'kanji', 'meta', "#{code}.json")))
      rescue => e
        next
        puts e
      end
      results << data
    end

    render json: { meta: results }
  end
end
