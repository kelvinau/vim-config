set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'leafgarland/typescript-vim'
Plugin 'peitalin/vim-jsx-typescript'
" All of your Plugins must be added before the following line
call vundle#end()            " required

execute pathogen#infect()
syntax on
filetype plugin indent on

"set t_Co=256

autocmd VimEnter * NERDTree
autocmd BufEnter * hi clear TODO

" Color Code: https://upload.wikimedia.org/wikipedia/commons/1/15/Xterm_256color_chart.svg
" Only ctermfg and ctermbg work
"hi LineNr cterm=bold ctermfg=2 ctermbg=8 guifg=Yellow
"hi CursorLine cterm=bold ctermbg=8
hi Visual ctermbg=232
hi CommandTHighlightColor cterm=bold ctermfg=2 ctermbg=7
hi Search ctermfg=236 ctermbg=222
"hi MatchParen cterm=bold ctermbg=8 ctermfg=2
hi Pmenu ctermfg=6 ctermbg=8 guibg=Magenta
hi PmenuSel ctermfg=10 ctermbg=256 guibg=DarkGrey
" Error
hi SpellBad ctermfg=015 ctermbg=166
" Warning
hi SpellCap ctermfg=000 ctermbg=245

xnoremap p pgvy
nnoremap <F7> :noh<CR>
noremap <S-Down> 10j
noremap <S-Up> 10k
noremap <ScrollWheelDown> 2j
noremap <ScrollWheelUp> 2k
cabbr Ack Ack!
cnoremap w!! w !sudo tee % >/dev/null

" Disable r in normal mode in case of fn + r
nnoremap r <nop>

set number
set autoindent
set backspace=start,indent,eol
set whichwrap+=<,>,[,]
set clipboard=unnamed
set copyindent
set expandtab
set hidden
set hlsearch
set ignorecase
set incsearch
set laststatus=2
set lazyredraw
set nomodeline
set modelines=0
set mouse=a
set pastetoggle=<F2>
set ruler
set shiftwidth=2
set softtabstop=2
set tabstop=2
set shortmess=filnxtToOc
set showmatch
set smartcase
set smarttab
set wildignore=*.pyc,*.gif,*.png,*.jpg,*.jpeg,*.gz,*.tgz,*.def
set undodir=~/.vim/vimundo
set undofile
set title
set cursorline
set completeopt-=preview
set nofixeol

set noerrorbells visualbell t_vb=

set autoread | au CursorHold * checktime | call feedkeys("lh")
" Triger `autoread` when files changes on disk
" https://unix.stackexchange.com/questions/149209/refresh-changed-content-of-file-opened-in-vim/383044#383044
" https://vi.stackexchange.com/questions/13692/prevent-focusgained-autocmd-running-in-command-line-editing-mode
" autocmd FocusGained,BufEnter,CursorHold,CursorHoldI * if mode() != 'c' | checktime | endif
" Notification after file change
" https://vi.stackexchange.com/questions/13091/autocmd-event-for-autoread
autocmd FileChangedShellPost *
  \ echohl WarningMsg | echo "File changed on disk. Buffer reloaded." | echohl None

" Remove trailing whitespace
"autocmd BufWritePre * %s/\s\+$//e

let NERDTreeAutoDeleteBuffer = 1
let NERDTreeMinimalUI = 1
let NERDTreeDirArrows = 1

" Check if NERDTree is open or active
function! IsNERDTreeOpen()
  return exists("t:NERDTreeBufName") && (bufwinnr(t:NERDTreeBufName) != -1)
endfunction

" Call NERDTreeFind iff NERDTree is active, current window contains a modifiable
" file, and we're not in vimdiff
function! SyncTree()
  if g:command_t_opened != 1 && &modifiable && IsNERDTreeOpen() && strlen(expand('%')) > 0 && !&diff
    try
      NERDTreeFind
      wincmd p
    catch
      echo v:exception
    endtry
  endif
  let g:command_t_opened=0
endfunction

" Highlight currently open buffer in NERDTree
let g:command_t_opened = 0
autocmd BufEnter * call SyncTree()

nnoremap <leader>q :bp<cr>:bd #<cr>


let g:ycm_disable_for_files_larger_than_kb = 100

let g:CommandTMaxHeight = 30
let g:CommandTMaxFiles=500000
let g:CommandTInputDebounce=50
let g:CommandTFileScanner="git"
let g:CommandTMaxCachedDirectories=10
let g:CommandTSmartCase=1
let g:CommandTRecursiveMatch=0
let g:CommandTHighlightColor="CommandTHighlightColor"

nnoremap <C-C> :let g:command_t_opened=0<CR>

set statusline=%f\ %m\ %#warningmsg#%{SyntasticStatuslineFlag()}%*
let g:syntastic_python_flake8_args='--ignore=E123,E126,E121,E501,E722,W293,W391,F841,F401,E116,E251'
autocmd FileType python set equalprg=autopep8\ -
let g:autopep8_on_save = 1
let g:autopep8_disable_show_diff=1
let g:syntastic_javascript_checkers=['eslint']
let g:syntastic_typescript_checkers=['eslint']
let g:syntastic_typescript_ext=['.ts,.tsx']
let g:syntastic_always_populate_loc_list = 2
let g:syntastic_auto_loc_list = 0
" For Angular
let g:syntastic_html_tidy_ignore_errors=[" proprietary attribute " ,"trimming empty \<", "inserting implicit ", "unescaped \&" , "lacks \"action", "lacks value", "lacks \"src", "is not recognized!", "discarding unexpected", "replacing obsolete "]

let g:NERDSpaceDelims = 1
let g:NERDCompactSexyComs = 1

let g:ft = ''
function! NERDCommenter_before()
  if &ft == 'vue'
    let g:ft = 'vue'
    let stack = synstack(line('.'), col('.'))
    if len(stack) > 0
      let syn = synIDattr((stack)[0], 'name')
      if len(syn) > 0
        exe 'setf ' . substitute(tolower(syn), '^vue_', '', '')
      endif
    endif
  endif
endfunction
function! NERDCommenter_after()
  if g:ft == 'vue'
    setf vue
    let g:ft = ''
  endif
endfunction

autocmd FileType vue syntax sync fromstart

let g:vue_disable_pre_processors=1

" disable autoformat as it will change history of other files
" let g:prettier#autoformat = 0
" " let g:prettier#quickfix_enabled = 0
" autocmd BufWritePre *.js,*.jsx,*.mjs,*.ts,*.tsx,*.css,*.less,*.scss,*.json,*.graphql,*.md,*.vue,*.yaml,*.html PrettierAsync
" set filetypes as typescript.jsx
autocmd BufNewFile,BufRead *.tsx,*.jsx set filetype=typescript.jsx
