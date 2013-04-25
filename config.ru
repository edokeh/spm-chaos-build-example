# encoding: UTF-8
#\ -w -p 2323
require 'rack/mime'
use Rack::ContentLength

app = Rack::Directory.new Dir.pwd
run app