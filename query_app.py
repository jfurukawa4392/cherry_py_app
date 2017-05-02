import cherrypy
import json
import os, os.path

class QueryResults(object):

    @cherrypy.expose
    def index(self):
        return open('./public/html/index.html')

    @cherrypy.expose
    def search(self, query=""):
        with open('query_specs.json') as data_file:
            data = json.load(data_file)

        if query in data.keys():
            return json.dumps(data[query])
        else:
            return "error"


if __name__ == '__main__':
    conf = {
        '/': {
            'tools.sessions.on': True,
            'tools.staticdir.root': os.path.abspath(os.getcwd())
        },
        '/static': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './public'
        }
    }
    cherrypy.quickstart(QueryResults(), '/', conf)
